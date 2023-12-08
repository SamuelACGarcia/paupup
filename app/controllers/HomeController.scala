package controllers

import javax.inject._
import play.api._
import play.api.mvc._

import scala.concurrent.{ExecutionContext, Future}
/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {
  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def index() = Action.async { implicit request: Request[AnyContent] =>
    val file = new java.io.File("public/index.html")
    val source = scala.io.Source.fromFile(file)
    val content = source.mkString
    source.close()
    Future.successful(Ok(content).as(HTML))
  }

  def defi2 = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.defi("Défi Programmation Fonctionnelle"))
  }

  def defi3() = Action.async { implicit request: Request[AnyContent] =>
    val file = new java.io.File("public/ThisisbetterthanHadouken/defi3.html")
    val source = scala.io.Source.fromFile(file)
    val content = source.mkString
    source.close()
    Future.successful(Ok(content).as(HTML))
  }

  def defi4() = Action.async { implicit request: Request[AnyContent] =>
    val file = new java.io.File("public/UneUIUXCauchemardesque/defi4.html")
    val source = scala.io.Source.fromFile(file)
    val content = source.mkString
    source.close()
    Future.successful(Ok(content).as(HTML))
  }


}
